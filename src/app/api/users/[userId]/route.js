import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    console.log("content",content.params.userId)
  let userId = content.params.userId;
  const data = user.find((user) => user.id == userId);

  return NextResponse.json(
    data
      ? { userdata: data, success: true }
      : { message: "user not found", success: false },
    { status: 200 }
  );
}


// put is used to update the data
export async function PUT(req, content) {
 
  let payload = await req.json();
  console.log("put api payload received",payload,content)
  let userId = content.params.userId;
  let index = user.findIndex((user) => user.id == userId);
  if (index !== -1) {
    user[index] = { ...user[index], ...payload };
    return NextResponse.json({ message: "updated successfully." ,user,success:true}, { status: 200 });
  } else {
    return NextResponse.json({ message: "user not found", success: false }, { status: 400 });
  }

}

export async function DELETE(req, content) {
  let userId = content.params.userId;
  console.log(userId,"delete api called")
  let index = user.findIndex((user) => user.id == userId);
  if (index !== -1) {
    user.splice(index, 1);
    return NextResponse.json({ message: "deleted successfully." ,user,success:true}, { status: 200 });
  } else {
    return NextResponse.json({ message: "user not found", success: false }, { status: 400 });
  }
}