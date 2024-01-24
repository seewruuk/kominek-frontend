import CurrentMonthCalendar from "@/components/_calendar/Calendar";
import SaveNewData from "@/components/_calendar/SaveNewData";

export default function Page() {
    return (
        <div className={"relative px-[15px] pb-[150px]"}>
                <CurrentMonthCalendar />

                {/*<SaveNewData/>*/}
        </div>
    )
}