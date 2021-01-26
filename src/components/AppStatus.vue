<template>
  <span :class="[
    'badge', 
    {'primary': status === 'active' || 'done'},
    {'warning' : status === 'pending'},
    {'danger' : status === 'cancelled'}
    ]"
    >
    {{status === 'active' ? 'Активен' : ''}}
    {{status === 'done' ? 'Завершён' : ''}}
    {{status === 'cancelled' ? 'Отменён' : ''}}
    {{status === 'pending' ? 'Выполняется' : ''}}</span>
</template>

<script>
export default {
  props: ['status']
}
</script>