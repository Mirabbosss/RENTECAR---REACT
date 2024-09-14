import koenigsegg from '../assets/images/Koenigsegg.jpg';
import nissangtr from '../assets/images/NissanGT-R.jpg';
import rollsroyce from '../assets/images/Rolls-Royce.jpg';
import allnewrush from '../assets/images/AllNewRush.jpg';
import allnewterios from '../assets/images/AllNewTerios.jpg';
import crv from '../assets/images/CR-V.jpg';
import mgzx from '../assets/images/MGZXExclusice.jpg';
import newmgzc from '../assets/images/NewMGZS.jpg';
import mgzxexcite from '../assets/images/MGZXExcite.jpg';
import { RxDashboard } from "react-icons/rx";
import { FaCarAlt } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GoInbox } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaHireAHelper } from "react-icons/lia";
import { IoInvertMode } from "react-icons/io5";


export const carList = [
    {
        id: 1,
        model: 'Koenigsegg',
        mode: 'Sport',
        gas: '90L',
        transmission: 'Manual',
        people: 2,
        price: 90.00,
        img: koenigsegg
    },
    {
        id: 2,
        model: 'Nissan GT-R',
        mode: 'SUV',
        gas: '120L',
        transmission: 'Auto',
        people: 4,
        price: 120.00,
        img: nissangtr
    },
    {
        id: 3,
        model: 'Rolls-Royce Phantom',
        mode: 'Coupe',
        gas: '120L',
        transmission: 'Auto',
        people: 2,
        price: 150.00,
        img: rollsroyce
    },
    {
        id: 4,
        model: 'All New Rush',
        mode: 'Sedan',
        gas: '80L',
        transmission: 'Manual',
        people: 4,
        price: 80.00,
        img: allnewrush
    },
    {
        id: 5,
        model: 'All New Terios',
        mode: 'Hatchback',
        gas: '105L',
        transmission: 'Manual',
        people: 4,
        price: 75.00,
        img: allnewterios
    },
    {
        id: 6,
        model: 'CR-V',
        mode: 'SUV',
        gas: '120L',
        transmission: 'Auto',
        people: 4,
        price: 120.00,
        img: crv
    },
    {
        id: 7,
        model: 'MGZX Exclusice',
        mode: 'SUV',
        gas: '120L',
        transmission: 'Auto',
        people: 4,
        price: 150.00,
        img: mgzx
    },
    {
        id: 8,
        model: 'New MGZS',
        mode: 'Sedan',
        gas: '80L',
        transmission: 'Manual',
        people: 4,
        price: 80.00,
        img: newmgzc
    },
    {
        id: 9,
        model: 'MGZX Excite',
        mode: 'Sedan',
        gas: '80L',
        transmission: 'Manual',
        people: 4,
        price: 80.00,
        img: mgzxexcite
    },
    {
        id: 10,
        model: 'Nissan GT-R',
        mode: 'SUV',
        gas: '120L',
        transmission: 'Auto',
        people: 4,
        price: 120.00,
        img: nissangtr
    },
    {
        id: 11,
        model: 'New MGZS',
        mode: 'Sedan',
        gas: '80L',
        transmission: 'Manual',
        people: 4,
        price: 80.00,
        img: newmgzc
    },
    {
        id: 12,
        model: 'CR-V',
        mode: 'SUV',
        gas: '120L',
        transmission: 'Auto',
        people: 4,
        price: 120.00,
        img: crv
    }
]

export const categoryTypes = ['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback']

export const categoryCapacity = [2, 4, 6, 8]

export const dashboardMenu = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: RxDashboard
    },
    {
        label: 'Car Rent',
        path: '/carrent',
        icon: FaCarAlt
    },
    {
        label: 'Insight',
        path: '/insight',
        icon: CgInsights
    },
    {
        label: 'Reimburse',
        path: '/reimburse',
        icon: CiMoneyCheck1
    },
    {
        label: 'Inbox',
        path: '/inbox',
        icon: GoInbox
    },
    {
        label: 'Calender',
        path: '/calender',
        icon: FaRegCalendarAlt 
    }
]

export const dashboardPreferences = [
    {
        label: 'Settings',
        path: '/settings',
        icon: IoSettingsOutline 
    },
    {
        label: 'Help',
        path: '/help',
        icon: LiaHireAHelper
    },
    {
        label: 'Darkmode',
        path: '/darkmode',
        icon: IoInvertMode
    }
]