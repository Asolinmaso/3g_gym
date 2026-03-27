import { google } from "googleapis";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    let sheetId = "";
    let values: any[] = [];

    // =========================
    // ✅ CAREER (FormData - FILE)
    // =========================
    if (contentType?.includes("multipart/form-data")) {
      const formData = await req.formData();

      const type = formData.get("type");

      if (type === "career") {
        sheetId = process.env.GOOGLE_SHEET_CAREER!;

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const position = formData.get("position");
        const location = formData.get("location");
        const message = formData.get("message");
        const file = formData.get("resume") as File;

        let fileUrl = "";
        if (!file) {
          return NextResponse.json({ success: false, error: "No file" });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // ✅ unique file name
        const fileName = `${Date.now()}_${file.name}`;

        // ✅ save path
        const filePath = path.join(process.cwd(), "public/uploads", fileName);

        // ✅ write file
        fs.writeFileSync(filePath, buffer);

        // ✅ URL to store in sheet
        fileUrl = `=HYPERLINK("${baseUrl}/uploads/${fileName}", "View Resume")`;

        values = [
          [
            name,
            email,
            phone,
            position,
            location,
            message,
            fileUrl,
            new Date().toLocaleString(),
          ],
        ];
      }
    }

    // =========================
    // ✅ CONTACT & FRANCHISE (JSON)
    // =========================
    else {
      const body = await req.json();

      if (body.type === "franchise") {
        sheetId = process.env.GOOGLE_SHEET_FRANCHISE!;

        values = [
          [
            body.data.name,
            body.data.phone,
            body.data.email,
            body.data.city,
            body.data.investment,
            new Date().toLocaleString(),
          ],
        ];
      }

      if (body.type === "contact") {
        sheetId = process.env.GOOGLE_SHEET_CONTACT!;

        values = [
          [
            body.data.name,
            body.data.phone,
            body.data.email,
            body.data.location,
            body.data.message,
            new Date().toLocaleString(),
          ],
        ];
      }
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:Z",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
