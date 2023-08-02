import getCurrentUser from '@/app/actions/getCurrentUser'
import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
import { NextResponse } from 'next/server'
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
  });


export async function POST(
 req: Request
){
try {
    const user = await getCurrentUser()
    const userId = user?.id

    const body = await req.json()
    const { prompt } = body

    if(!userId){
        return new NextResponse('Unauthorized', {status: 401})
    }

    if (!prompt) {
        return new NextResponse("Prompt is required", { status: 400 });
      }

      const freeTrial = await checkApiLimit();
      const isPro = await checkSubscription();

      if (!freeTrial && !isPro) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
      }
  
      const response = await replicate.run(
        "anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f",
        {
          input: {
            prompt
          }
        }
      );

      if(!isPro){
        await incrementApiLimit();
    }

    return NextResponse.json(response)
} catch (error) {
    console.log("[VIDEO_ERROR]", error)
    return new NextResponse('Internal Error', {status: 500})
}

}