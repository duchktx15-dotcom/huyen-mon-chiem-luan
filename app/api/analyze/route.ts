import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { laso } = body;

    if (!laso) {
      return NextResponse.json(
        {
          success: false,
          message: "Thiếu dữ liệu lá số.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
Bạn là một chuyên gia Tử Vi truyền thống.

Nhiệm vụ của bạn là luận giải CHÍNH XÁC dựa trên dữ liệu lá số dưới đây.

====================
DỮ LIỆU LÁ SỐ
====================

${JSON.stringify(laso, null, 2)}

====================

Yêu cầu:

- Không được nói đây là dữ liệu JSON.
- Không nhắc tới AI.
- Không nói "theo dữ liệu được cung cấp".
- Viết như một thầy tử vi đang luận số.

Chia thành các mục:

1. Tổng quan vận mệnh
2. Mệnh và Thân
3. Công danh sự nghiệp
4. Tài lộc
5. Tình duyên hôn nhân
6. Gia đạo
7. Sức khỏe
8. Đại hạn và vận trình
9. Những năm cần lưu ý
10. Lời khuyên

Viết khoảng 1800-2500 từ.
`;

    const response = await client.responses.create({
      model: "gpt-5.5",
      input: prompt,
    });

    return NextResponse.json({
      success: true,
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo luận giải.",
      },
      {
        status: 500,
      }
    );
  }
}