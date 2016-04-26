import {Pipe} from 'angular2/core';
import {Course, Offered} from './course';

@Pipe({
    name: 'FilterPipe',
    pure: false
})
export class FilterPipe {
    transform(courses: Course[], args) {
        return courses.filter(course => {
            var courseMatch = (course.title.toLowerCase().indexOf(args[0].title.toLowerCase()) !== -1);

            var dayMatch = true;
            if (typeof args[0].monday !== 'undefined' || typeof args[0].tuesday !== 'undefined' || typeof args[0].wednesday !== 'undefined' || typeof args[0].thursday !== 'undefined' || typeof args[0].friday !== 'undefined' || typeof args[0].online !== 'undefined') {
                dayMatch = false;
                if (typeof args[0].monday !== 'undefined' && args[0].monday) {
                    if (course.offered.days.indexOf('m') !== -1) {
                        dayMatch = true;
                    }
                } else if (typeof args[0].tuesday !== 'undefined' && args[0].tuesday) {
                    if (course.offered.days.indexOf('tu') !== -1) {
                        dayMatch = true;
                    }
                } else if (typeof args[0].wednesday !== 'undefined' && args[0].wednesday) {
                    if (course.offered.days.indexOf('w') !== -1) {
                        dayMatch = true;
                    }
                } else if (typeof args[0].thursday !== 'undefined' && args[0].thursday) {
                    if (course.offered.days.indexOf('th') !== -1) {
                        dayMatch = true;
                    }
                } else if (typeof args[0].friday !== 'undefined' && args[0].friday) {
                    if (course.offered.days.indexOf('f') !== -1) {
                        dayMatch = true;
                    }
                } else if (typeof args[0].online !== 'undefined' && args[0].online) {
                    if (course.offered.days.indexOf('online') !== -1) {
                        dayMatch = true;
                    }
                } else if (!args[0].monday &&!args[0].tuesday &&!args[0].wednesday &&!args[0].thursday &&!args[0].friday && !args[0].online) {
                    dayMatch = true;
                }
            }

            var completeMatch = (args[0].complete == (course.grade.length > 0));

            var degreeMatch = true;
            if (args[0].degree) {
                degreeMatch = course.degree;
            }

            var enrolledMatch = (course.enrolled === args[0].enrolled);

            var teacherMatch = true;
            if (typeof args[0].teacher !== 'undefined' && args[0].teacher.length > 0) {
                teacherMatch = (course.teacher.name === args[0].teacher);
            }

            var schoolMatch = true;
            if (typeof args[0].school !== 'undefined' && args[0].school.length > 0) {
                schoolMatch = (course.school.name === args[0].school);
            }

            var semesterMatch = true;
            if (typeof args[0].semester !== 'undefined' && args[0].semester.length > 0) {
                semesterMatch = false;
                for (var i in course.semesters) {
                    if (course.semesters[i].description === args[0].semester) {
                        semesterMatch = true;
                    }
                }
            }

            return (courseMatch && dayMatch && enrolledMatch && degreeMatch && completeMatch && teacherMatch && schoolMatch && semesterMatch);
        });
    }
}
