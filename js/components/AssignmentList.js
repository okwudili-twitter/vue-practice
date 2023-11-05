import Assignment from "./Assignment.js";

export default {
    components: {
        'assignment' : Assignment,
    },

    template: `
        <section v-show="assignments.length" style="width:230px" >
            <h2 class="font-bold mb-2" >
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex flex-wrap gap-1 " style="width: 230px">
                <button
                    :key="1000000"
                    @click="currentTag = 'all' "
                    :class="{
                        'border rounded px-1 py-px text-xs' : true,
                        'text-blue-500 border-blue-500' : currentTag == 'all',
                    } "
                >
                    all
                </button>

                <button
                    v-for="tag in tags"
                    :key="tag.id"
                    @click="currentTag = tag.name"
                    :class="{
                        'border rounded px-1 py-px text-xs' : true,
                        'text-blue-500 border-blue-500' : currentTag == tag.name,
                    } "
                >
                    {{ tag.name }}
                </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>

            <span class="text-yellow-500"
                v-show="filteredAssignments.length == 0"
            >No '{{ title }}' assignments in '{{ currentTag }}' tag</span>
        </section>
    `,

    data() {
        return {
            'currentTag' : 'all',
        }
    },

    props: {
        assignments: {
            type: Array,
            default: [],
        },
        title: String,
        tags: Array,
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            } else {
                return this.assignments.filter(assignment => assignment.tags.includes(this.currentTag));
            }
        }
    }
}