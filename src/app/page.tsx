import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_lfr_min-content]">
        <CardHeader>
          <CardTitle>Chatbot AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chatbot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>RMFA</AvatarFallback>
              <AvatarImage src="https://github.com/salamandery.png" alt="AI" />
            </Avatar>
            <p className="mt-2 leading-relaxed">
              <span className="block font-bold text-slate-700">Humano:</span>
              What's your opinion about Typescript?
            </p>
          </div>
          <div className="flex gap-2 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="/images/ai.png" alt="AI" />
            </Avatar>
            <p className="mt-2 leading-relaxed">
              <span className="block font-bold text-slate-700">
                Chatbot-ai:
              </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              nulla explicabo deleniti, qui accusamus, et fuga, suscipit
              veritatis sed doloribus repellendus! Sit repellat repellendus
              facilis laudantium animi laborum quasi assumenda.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="how can i help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
