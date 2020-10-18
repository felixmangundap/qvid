import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../utils/colors';
import styles from './styles'

const today = moment();
const TimeSlot = ({ interval, timeOpen, timeClose, timeSlot, setTimeSlot }) => {
    const [currentDay, setCurrentDay] = useState(moment());
    const [timeSlotArr, setTimeSlotArr] = useState([]);
    const [chosenSlot, setChosenSlot] = useState('');

    const prevDisabled = moment(currentDay).isSame(today);

    useEffect(() => {
        const hour = moment(timeOpen).hour();
        const minute = moment(timeOpen).minute();
        const closeHour = moment(timeClose).hour();
        const closeMinute = moment(timeClose).minute();
        
        const currTimeClose = moment(currentDay).hour(closeHour).minute(closeMinute).second(0);
        let currTime = moment(currentDay).hour(hour).minute(minute).second(0);
        let tempArray = [];
        while (moment(currTime).isBefore(moment(currTimeClose).subtract(interval, 'm'))) {
            tempArray.push(currTime);
            currTime = moment(currTime).add(interval, 'm');
        }
        setTimeSlotArr(tempArray);
    }, [currentDay])

    const renderSlot = () => {
        return timeSlotArr.map(time => {
            const timeConverted = moment(time).format('hh:mm A');

            return (
                <TouchableOpacity
                    style={[styles.timePill, chosenSlot === moment(time).unix() ? styles.active : null]}
                    onPress={() => {
                        setTimeSlot(time);
                        setChosenSlot(moment(time).unix());
                    }}
                >
                    <Text style={[styles.timePillText, chosenSlot === moment(time).unix() ? styles.activeText : null]}>
                        {timeConverted}
                    </Text>
                </TouchableOpacity>
            )}
        )
    }

    return (
        <View style={styles.timeSlotPicker}>
            <View style={styles.datePicker}>
                <TouchableOpacity
                    onPress={() => setCurrentDay(moment(currentDay).subtract(1, 'd'))}
                    style={[styles.button, prevDisabled ? styles.disabled : null]}
                    disabled={prevDisabled}
                >
                    <Icon name={'chevron-left'} size={30} color={prevDisabled ? '#D7F4ED' : colors.qvidGreen} />
                </TouchableOpacity>
                <View style={styles.dateText}>
                    <Text style={styles.day}>
                    {
                        moment(currentDay).calendar(null, {
                            sameDay: '[Today]',
                            nextDay: '[Tomorrow]',
                            nextWeek: 'dddd',
                            sameElse: 'dddd'
                        })
                    }</Text>
                    <Text style={styles.date}>{ moment(currentDay).format('MMMM D, YYYY') }</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setCurrentDay(moment(currentDay).add(1, 'd'))}
                    style={[styles.button]}
                >
                    <Icon name={'chevron-right'} size={30} color={colors.qvidGreen} />
                </TouchableOpacity>
            </View>
            <View style={styles.availableSlot}>
                {renderSlot()}
            </View>
        </View>
    )
}

export default TimeSlot;