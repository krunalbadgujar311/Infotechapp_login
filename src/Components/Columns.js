import {format} from 'date-fns'
import ColumnFilter from './ColumnFilter.js'

export const COLUMNS = [
    {
        Header: 'EMP_ID',
        Footer:'EMP ID',
        accessor: 'empid',
        Filter:ColumnFilter,
        //disableFilters:true
    },
    {
        Header: 'Name(First)',
        Footer:'First Name',
        accessor: 'firstName',
        Filter:ColumnFilter
    },
    {
        Header: 'Name(Last)',
        Footer:'Last Name',
        accessor: 'lastName',
        Filter:ColumnFilter
    },
    {
        Header: 'Age',
        Footer:'Age',
        accessor: 'age',
        Filter:ColumnFilter
    },
    {
        Header: 'Visits',
        Footer:'Visits',
        accessor: 'visits',
        Filter:ColumnFilter
    },
    {
        Header: 'Progress',
        Footer:'Progress',
        accessor: 'progress',
        Filter:ColumnFilter
    },
    {
        Header: 'Status',
        Footer:'Status',
        accessor: 'status',
        //Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
        Filter:ColumnFilter
    }]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer:'Id',
        accessor: 'id',
        Filter:ColumnFilter
    },
    {
        Header: 'Name',
        Footer:'Name',
        columns:[
            {
                Header: 'First Name',
                Footer:'First Name',
                accessor: 'student_first_name',
                Filter:ColumnFilter
            },
            {
                Header: 'Last Name',
                Footer:'Last Name',
                accessor: 'student_last_name',
                Filter:ColumnFilter
            }
        ]
    },
    {
        Header: 'Location And Credentials',
        Footer:'Location And Credentials',
        columns:[
            {
                Header: 'City',
                Footer:'City',
                accessor: 'city',
                Filter:ColumnFilter
            },
            {
                Header: 'Email Id',
                Footer:'Email Id',
                accessor: 'email',
                Filter:ColumnFilter
            },
            {
                Header: 'Password',
                Footer:'Password',
                accessor: 'password',
                Filter:ColumnFilter
            }
        ]
    },
    {
        Header: 'Exam Marks And Dates',
        Footer:'Marks',
        columns:[
            {
                Header: 'Physics Exam Date',
                Footer:'Physics Exam Date',
                accessor: 'physics_exam_date',
                Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
                Filter:ColumnFilter
            },
            {
                Header: 'Physics Exam Marks',
                Footer:'Physics Exam Marks',
                accessor: 'physics_exam_marks',
                Filter:ColumnFilter
            },
            {
                Header: 'Chemistry Exam Date',
                Footer:'Chemistry Exam Date',
                accessor: 'chemistry_exam_date',
                Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
                Filter:ColumnFilter
            },
            {
                Header: 'Chemistry Exam Marks',
                Footer:'Chemistry Exam Marks',
                accessor: 'chemistry_exam_marks',
                Filter:ColumnFilter
            },
            {
                Header: 'Mathematics Exam Date',
                Footer:'Mathematics Exam Date',
                accessor: 'mathematics_exam_date',
                Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
                Filter:ColumnFilter
            },
            {
                Header: 'Mathematics Exam Marks',
                Footer:'Mathematics Exam Marks',
                accessor: 'mathematics_exam_marks',
                Filter:ColumnFilter
            }
        ]
    },
    {
        Header: 'Total',
        Footer:'Total',
        columns:[
            {
                Header: 'Total',
                Footer:'Total',
                accessor: 'total_in_3',
                Filter:ColumnFilter
            },
            {
                Header: 'Percentage',
                Footer:'Percentage',
                accessor: 'percentage',
                Filter:ColumnFilter
            }
        ]
    }

]