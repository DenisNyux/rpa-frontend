import React from 'react'
import Link from 'next/link';

import { EventsType} from '@/types/EventsType';
import getSingleEvent from '@/api/events/getSingleEvent';

import separateToParagraphs from '@/lib/separateToParagraphs';

type SingleEventPageProps = {
    params: {
        eventSlug: string;
    };
  };

async function SingleEvent({ params }: SingleEventPageProps) {

    const singleEventData: Promise<EventsType> = getSingleEvent(params.eventSlug);
    const singleEvent = await singleEventData;
    const exactEvent = singleEvent.data[0].attributes

    console.log(exactEvent)
    
  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col">
      <Link href={`/events`} className=" text-[#5E050D] text-base leading-5">← Назад</Link>
        <h2 className="mt-6 mb-3">{exactEvent.eventTitle}</h2>
        {exactEvent.eventDescription && <span className='flex flex-col gap-3 text-base'>{separateToParagraphs(exactEvent.eventDescription)}</span>}
      <span className='flex flex-col gap-2 mt-6'></span>
    </div>
  )
}

export default SingleEvent