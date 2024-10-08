"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const menuItems:NavigationMenuItem[] = [
    {
        title: "صفحه اصلی",
        href: "/"
    },
    {
        title: "دوره های ریکت و نکس",
        href: "/courses"
    },
    {
        title: "مطالب و مقالات ",
        href: "/blog"
    }
]

export const TopNavigation: React.FC = () => {
    const pathName = usePathname();

    return (
        <ul className="flex gap-x-8 mr-12">
            {
                menuItems.map((item) => {
                    const isActive = pathName === item.href;
                    return (
                        <li key={`navigation-${item.href}`}>
                            <Link href={item.href} className={`dark:hover:text-primary transition-colors ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30'}`}>
                            {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}