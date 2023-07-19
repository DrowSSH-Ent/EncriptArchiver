"use client";
import Image from "next/image";
import Link from "next/link";
import { Props } from "next/script";
import React, { PropsWithChildren } from "react";

const TwitterHandle: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-blue-500">{children}</span>;
};

const Author: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link target="_blank" rel="noopener noreferrer" href={href} className="duration-150 text-zinc-200 hover:text-zinc-50">
    {children}
  </Link>
);

const Title: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="text-sm duration-150 text-zinc-500 hover:text-zinc-300"
  >
    {children}
  </Link>
);

export const Testimonials = () => {
  const posts: {
    content: React.ReactNode;
    link: string;
    author: {
      name: React.ReactNode;
      title?: React.ReactNode;
      image: string;
    };
  }[] = [
    {
      content: (
        <div>
          <p>
            Contáctame <TwitterHandle>@drowkid-1</TwitterHandle>'s envshare:
          </p>
          <p>
            Encripta todo tipo de archivos con mi herramienta
          </p>
          <br />
          <p>Personaliza tu versión de EncriptArchiver.</p>
          <br />
          <p>Sígueme👏</p>
        </div>
      ),
      link: "https://lalo.my.to",
      author: {
        name: <Author href="https://lalo.my.to">DrowKid</Author>,
        title: <Title href="#">CEO @discreet</Title>,
        image: "https://avatars.githubusercontent.com/u/135056994?s=400&u=3eec480692fa060d584e295bc9ca61dc904a991e&v=4",
      },
    },
    {
      content: (
        <div>
          <p>Checa mis otros repositorios:</p>
          <ul>
            <li>
              ◆ Built on <TwitterHandle>@nextjs</TwitterHandle> + <TwitterHandle>@upstash</TwitterHandle>, hosted on{" "}
              <TwitterHandle>@vercel</TwitterHandle>
            </li>
            <li>◆ 100% free to use & open source</li>
            <li>◆ One-click deploy via Vercel + Upstash integration</li>
          </ul>
          <p>Deploy your own → http://vercel.fyi/envshare</p>
        </div>
      ),
      
  return (
    <section className="container mx-auto">
      <ul role="list" className="grid max-w-2xl grid-cols-1 gap-16 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col justify-between duration-150 border rounded border-zinc-500/30 hover:border-zinc-300/30 hover:bg-zinc-900/30 group"
          >
            <Link href={post.link} className="whitespace-pre-line text text-zinc-500 p-6">
              {post.content}
            </Link>
            <div className="relative flex items-start justify-between p-6 duration-150 border-t bg-zinc-900/40 border-zinc-500/30 group-hover:border-zinc-300/30">
              <div>
                <div className="text-base font-display text-zinc-200">{post.author.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{post.author.title}</div>
              </div>
              <div className="overflow-hidden rounded-full bg-zinc-50">
                <Image className="object-cover h-14 w-14" src={post.author.image} alt="" width={56} height={56} />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
