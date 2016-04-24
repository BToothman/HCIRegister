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
            for (var day in args[0].days) {
                if (course.offered.days.indexOf(args[0].days[day]) == -1) {
                    dayMatch = false;
                }
            }

            var completeMatch = (args[0].complete == (course.grade.length > 0));

            var degreeMatch = true;
            if (args[0].degree) {
                degreeMatch = course.degree;
            }

            var enrolledMatch = (course.enrolled === args[0].enrolled);

            return (courseMatch && dayMatch && enrolledMatch && degreeMatch && completeMatch);
        });
    }
}
