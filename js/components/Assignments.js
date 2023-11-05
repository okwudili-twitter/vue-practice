import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignment-list' : AssignmentList,
        'assignment-create' : AssignmentCreate,
    },

    template: `
        <section class="space-y-6">
            <assignment-list :tags="tags" title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list :tags="tags"  title="Completed" :assignments="filters.completed"></assignment-list>

            <assignment-create :tags="tags" @add="add" :error="error" ></assignment-create>

        </section>

    `,

    data() {
        return {
            assignments : [],
            tags : [],
            error: '',
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.completed),
                completed: this.assignments.filter(a => a.completed),
            }
        }
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });

        fetch('http://localhost:3000/tags')
            .then(response => response.json())
            .then(tags => {
                this.tags = tags;
            });
    },

    methods: {
        add(name, tags) {
            // Check if the new_assignment already exists in assignments
            const assignmentExists = this.assignments.some(
                (assignment) => assignment.name.toLowerCase() === name
            );

            if (assignmentExists) {
                this.error = 'Assignment already exists!';
            } else {
                this.assignments.push({
                    name: this.capitalizeString(name),
                    completed: false,
                    id: this.assignments.length + 1,
                    tags: tags,
                });

                this.error = '';
            }

        },
        capitalizeString(str) {
            return str.replace(/\b\w/g, function(match) {
              return match.toUpperCase();
            });
        }
    }
}