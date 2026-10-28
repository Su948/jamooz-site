const normalizeCountry = (value: string | null) => {
  const country = value?.trim().toUpperCase();
  return country && /^[A-Z]{2}$/.test(country) ? country : null;
};

export async function GET(request: Request) {
  const country = normalizeCountry(
    request.headers.get("x-vercel-ip-country") ??
      request.headers.get("cf-ipcountry") ??
      request.headers.get("x-country-code"),
  );

  return Response.json(
    { country, source: country ? "ip" : "unavailable" },
    { headers: { "Cache-Control": "private, no-store, max-age=0" } },
  );
}
