import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<div className="border-black/10 border-b h-[40px] flex iutems-center justify-between px-5">
			<Image 
			src="https://icon2.cleanpng.com/20180329/hye/avdv6fc0k.webp"
			alt="Logo"
			width={30}
			height={30}
			className="eounded-full"
			priority
			/>


			<ul className="flex items-center gap-3">
				<li>
					<Link href="/">Home</Link>
				</li>

				<li>
					<Link href="/posts">Posts</Link>
				</li>
			</ul>
		</div>
	);
}
