import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import React from 'react'

export const Buttn = ({text, link}: {text: string; link: string}) => {
  return (
		<div className='w-full'>
			<Link href={link}>
              <Button className='flex items-center justify-center mt-6 w-full text-white bg-black py-7 rounded-xl font-bold '>
                  {text}
              </Button>
			</Link>
		</div>
	);
}


