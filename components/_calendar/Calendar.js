"use client"
import Header from "@/components/header/Header";
import {useEffect, useState} from "react";

const Calendar = ({year, month}) => {
    // Pobieranie pierwszego dnia miesiąca według polskiego formatu
    const firstDay = new Date(year, month).getDay() - 1;

    // Pobieranie liczby dni w miesiącu
    const daysInMonth = new Date(year, month + 1, 0).getDate() - 1;
    // Pobieranie liczby dni w poprzednim miesiącu
    const daysInLastMonth = new Date(year, month, 0).getDate();
    // Wyznaczanie dnia tygodnia dla ostatniego dnia miesiąca
    const lastDay = new Date(year, month, daysInMonth).getDay() - 1;

    // Przygotowanie danych dla kalendarza
    const days = [];
    // Dodawanie ostatnich dni poprzedniego miesiąca
    for (let i = firstDay; i > 0; i--) {
        days.push(daysInLastMonth - i + 1);
    }
    // Dodawanie dni obecnego miesiąca
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    // Uzupełnienie dni następnego miesiąca
    for (let i = 1; i < 7 - lastDay; i++) {
        days.push(i);
    }

    // Przykładowe zaplanowane wydarzenia
    const events = [6, 10, 17, 24, 25]; // dni z wydarzeniami

    return (
        <div className="inline-block bg-[#13131A] text-white rounded-lg py-5 w-full">
            <div className="grid grid-cols-7 gap-1 text-[11px]">
                {['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'].map(day => (
                    <div key={day} className="flex items-center justify-center h-10">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <div key={index}
                         className={`rounded-md flex items-center justify-center h-10 relative cursor-pointer ${index < firstDay || index >= firstDay + daysInMonth ? 'bg-[#17171E]' : 'bg-[#202129]'}`}>
                        {day}
                        {
                            events.includes(day) && (
                                <span className={"absolute top-1.5 right-1.5 rounded-full h-[5px] w-[5px] bg-accentColor"}/>
                            )
                        }

                    </div>
                ))}
            </div>
        </div>
    );
};


export default function CurrentMonthCalendar() {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
    const [month, setMonth] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        switch (currentMonth) {
            case 0:
                setMonth("Styczeń")
                break;
            case 1:
                setMonth("Luty")
                break;
            case 2:
                setMonth("Marzec")
                break;
            case 3:
                setMonth("Kwiecień")
                break;
            case 4:
                setMonth("Maj")
                break;
            case 5:
                setMonth("Czerwiec")
                break;
            case 6:
                setMonth("Lipiec")
                break;
            case 7:
                setMonth("Sierpień")
                break;
            case 8:
                setMonth("Wrzesień")
                break;
            case 9:
                setMonth("Październik")
                break;
            case 10:
                setMonth("Listopad")
                break;
            case 11:
                setMonth("Grudzień")
                break;

            default:
                break;

        }
    }, [currentMonth]);

    const decreaseMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }

    }
    const increaseMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    useEffect(() => {
        if (currentDate) {
            setLoading(false)
        }
    }, [currentDate]);


    return (
        <>

            {
                loading ? (
                        <div className={"flex justify-center items-center h-screen animate-pulse"}>
                            <p>Ładowanie...</p>
                        </div>
                    ) :
                    null
            }


            <Header/>

            <section className={"flex justify-center mt-[42px] mb-[12px]"}>
                <div
                    className={"py-[32px] w-full px-[21px] bg-[#202129] rounded-2xl flex flex-col justify-center items-center"}>
                    <p className={"text-greyTextColor"}>Harmonogram zadań</p>
                    <p className={"text-[52px] flex items-center gap-2 font-[600]"}>12<span
                        className={"text-[14px] text-accentColor"}>łącznie</span></p>
                </div>
            </section>

            <section className={"relative flex gap-1 items-center text-[12px] flex-wrap"}>
                <div className={"px-7 py-1 bg-backgroundLightColor rounded-full flex-grow text-center"}>
                    {currentYear} {month}
                </div>

                <button className={"py-1 px-3 bg-backgroundLightColor  rounded-full"}
                        onClick={decreaseMonth}>
                    p
                </button>
                <button className={"py-1 px-3 bg-backgroundLightColor  rounded-full"}
                        onClick={increaseMonth}>
                    n
                </button>
            </section>

            <section>
                <Calendar year={currentYear} month={currentMonth}/>

            </section>

        </>
    )
}