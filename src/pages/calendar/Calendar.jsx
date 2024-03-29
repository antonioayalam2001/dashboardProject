import {getColors} from "../../helpers/index.js";
import {useState} from "react";
import {Header} from "../../components/Header.jsx";
import {Box, ListItem, ListItemText, Typography} from "@mui/material";
import {formatDate} from "@fullcalendar/core";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'


export const Calendar = () => {
    const colors = getColors();
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        console.log(selected)
        const title = prompt('title');
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();
        if (title) {
            calendarAPI.addEvent({
                id: ` ${selected.dateStr} - ${title}`,
                title,
                start: ` ${selected.startStr}`,
                end: ` ${selected.endStr}`,
                allDay: ` ${selected.allDay}`
            })
        }
    }

    const handleClickDelete = (selected) => {
        if (window.confirm("U want to delete it?")) selected.event.remove();
    }

    function handleEventClick(click) {
        // console.log(click)
    }

    function handleEventDrop({event}) {
        console.log(event)
    }

    return (
        <Box p={"4rem"}>
            <Header title={"Full control of your events"} subtitle={'Start organizing all your times'}></Header>
            {/*    Calendar left side*/}
            <Box display={'flex'} height={"70vh"}>
                <Box flex={'1 1 20%'} bgcolor={colors.secondary[500]} borderRadius={'4px'} p={'15px'}>
                    <Typography variant={'h3'} fontWeight={800}>Events</Typography>
                    {currentEvents?.map((event) => (
                        <ListItem key={event.id} sx={{backgroundColor: colors.primary[500], margin: '10px 0', borderRadius: '2px'}}>
                            <ListItemText  sx={{color: colors.white[400]}} primary={event.title} secondary={
                                <Typography>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</Typography>
                            }/>
                        </ListItem>
                    ))}
                </Box>
                {/*    Calendar Right side*/}
                <Box flex={'1 1 80%'} height={"70vh"} sx={{
                    ".fc .fc-daygrid-day-number": {color: colors.primary[400], fontWeight: 'bold'},
                }}>
                    <FullCalendar
                        height={"100%"}
                        plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin]
                    }
                                  headerToolbar={{
                                      left: 'prev,next,today',
                                      center: 'title',
                                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                                  }}
                                  editable={true}
                                  selectable={true}
                                  selectMirror={true}
                                  dayMaxEvents={true}
                                  select={handleDateClick}
                                  eventClick={handleEventClick}
                                  eventsSet={(events) => setCurrentEvents(events)}
                                  initialEvents={[
                                      {
                                          id: "0",
                                          title: "First event",
                                          date: "2023-02-16",
                                      },
                                      {
                                          id: "1",
                                          title: "Second event",
                                          date: "2023-02-14",
                                      }
                                  ]}
                                  eventDrop = {handleEventDrop}
                    />
                </Box>
            </Box>
        </Box>
    );
}