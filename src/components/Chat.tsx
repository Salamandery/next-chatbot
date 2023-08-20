'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useChat } from 'ai/react';
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });
  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chatbot AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="space-y-4 w-full h-[500px] pr-4">
          {messages.map((message, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 text-slate-600 text-sm mb-4"
              >
                {message.role === 'user' ? (
                  <Avatar>
                    <AvatarFallback>RMFA</AvatarFallback>
                    <AvatarImage
                      src="https://github.com/salamandery.png"
                      alt="AI"
                    />
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="/images/ai.png" alt="AI" />
                  </Avatar>
                )}
                <p className="mt-2 leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'You:' : 'CHATBOT-AI:'}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            placeholder="how can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
