import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, quantity, requirements } = body;

    // Data Flow Placeholder: In a real scenario, this is where you'd integrate 
    // with Resend, SendGrid, or a CRM like HubSpot/Salesforce.
    console.log('--- NEW RFQ RECEIVED ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Company: ${company}`);
    console.log(`Type: ${projectType}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Requirements: ${requirements}`);
    console.log('------------------------');

    // Simulate a small delay for the "processing" feel
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: 'Inquiry Sent Successfully', status: 'success' },
      { status: 200 }
    );
  } catch (error) {
    console.error('RFQ Submission Error:', error);
    return NextResponse.json(
      { message: 'Failed to send inquiry', status: 'error' },
      { status: 500 }
    );
  }
}
