export default {
    template : `
        <div class="flex flex-wrap gap-1 " style="width: 230px">
            <button
                :key="1000000"
                @click="$emit('update:modelValue', 'all')"
                :class="{
                    'border rounded px-1 py-px text-xs' : true,
                    'text-blue-500 border-blue-500' : modelValue == 'all',
                } "
            >
                all
            </button>

            <button
                v-for="tag in tags"
                :key="tag.id"
                @click="$emit('update:modelValue', tag.name)"
                :class="{
                    'border rounded px-1 py-px text-xs' : true,
                    'text-blue-500 border-blue-500' : modelValue == tag.name,
                } "
            >
                {{ tag.name }}
            </button>
        </div>
    `,

    props: {
        tags: Array,
        //i used modelValue because the string we're
        //accepting is bound to a v-model, so it gets
        //the value
        modelValue: String,
    },
}