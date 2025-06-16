import { NavItem, NavLinks } from '@/lib/navLink/navLink';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const page = () => {
    const administration = NavLinks.find(link => link.href === '/administration');
    return (
        <div>
            {
                administration && administration.children ? (
                    <div className="max-w-[1280px] mx-auto gap-2  flex">
                        {administration.children.map((item: NavItem, index: number) => (

                            <Link
                                key={index}
                                href={item.href!}
                                className="w-full"
                            >
                               <h2 className="text-xl font-bold bg-secondary w-full text-center flex justify-center gap-2 p-10 items-center">{item.name} <FaExternalLinkAlt />
                            </h2>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-2xl font-bold">No administration data available</p>
                )
            }
        </div>
    );
};

export default page;