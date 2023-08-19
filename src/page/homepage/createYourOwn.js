import React from 'react'
import {
    CreateYourOwnContent,
    CreateYourOwnTitle,
    CreateYourOwnInside,
    CreateYourOwnButton
} from './index.styled';

export default function CreateYourOwn() {
  return (
    <CreateYourOwnContent>
        <CreateYourOwnTitle>
            Create Your Own NFT!
        </CreateYourOwnTitle>
        <CreateYourOwnInside>
            We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!
        </CreateYourOwnInside>
        <CreateYourOwnButton>
            <button className='joinNow'>
                Join Comunity Now
            </button>
        </CreateYourOwnButton>
    </CreateYourOwnContent>
  )
}
