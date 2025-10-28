"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(address: string) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GOOGLE_MAPS_API_KEY environment variable");
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Geocode request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data || !Array.isArray(data.results) || data.results.length === 0) {
    const status = data?.status ?? "UNKNOWN";
    throw new Error(`Geocoding returned no results for address "${address}" (status: ${status})`);
  }

  const location = data.results[0]?.geometry?.location;
  if (!location || typeof location.lat !== "number" || typeof location.lng !== "number") {
    throw new Error(`Invalid geocode response structure for address "${address}"`);
  }

  return { lat: location.lat, lng: location.lng };
}

export async function addLocation(formData: FormData, tripId: string) {
  const session = await auth();
  if (!session) {
    throw new Error("Not authenticated");
  }

  const address = formData.get("address")?.toString();
  if (!address) {
    throw new Error("Missing address");
  }

  const { lat, lng } = await geocodeAddress(address);

  const count = await prisma.location.count({
    where: { tripId },
  });

  await prisma.location.create({
    data: {
      locationTitle: address,
      lat,
      lng,
      tripId,
      order: count,
    },
  });

  redirect(`/trips/${tripId}`);
}
