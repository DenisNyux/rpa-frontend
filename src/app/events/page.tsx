import Link from "next/link"

import getAllEvents from "@/api/events/getAllEvents";
import { EventsType } from "@/types/EventsType";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";


async function Events() {

  const eventsData: Promise<EventsType> = getAllEvents();
  const events = await eventsData;
  const eventsDataList = events.data;
  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">← На главную</Link>
      {/* <h2 className="mt-6">Новости РПА</h2> */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {eventsDataList.map((event) => (
          <RoundSquareLink key={event.id} linkTitle={event.attributes.eventTitle} url={`/events/${event.attributes.eventSlug}`} />
        ))}
      </div>
    </div>
  )
}

export default Events