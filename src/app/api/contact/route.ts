import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the POST handler for form submission
export async function POST(req: Request) {
    try {
        // Extract form data from the request body
        const body = await req.json();

        const { name, email, budget, message } = body;

        // Define the file path to save the data locally
        const filePath = path.join(process.cwd(), 'formData.txt');

        // Prepare the content to be saved in the file
        const content = `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nMessage: ${message}\n\n`;

        // Append the content to the text file
        fs.appendFileSync(filePath, content);

        // Return a success response
        return NextResponse.json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        return NextResponse.json({ message: 'Error saving form data' }, { status: 500 });
    }
}
