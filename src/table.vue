<template>
  <div class="b-table-wrapper">
    <table class="b-table" :class="{ bordered, tight, striped }">
      <thead>
        <tr>
          <th><input ref="selectAll" @change="onSelectedAllItems" type="checkbox" /></th>
          <th v-if="indexIsVisable">#</th>
          <th v-for="col in columns" :key="col.text">
            {{ col.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in dataSource" :key="row.id">
          <!-- checked 根据selectedItems设置选中状态 -->
          <th><input type="checkbox" @change="onSlecteItem(row, index, $event)" :checked="inSelectedItems(row)" /></th>
          <td v-if="indexIsVisable">{{ index }}</td>
          <template v-for="col in columns">
            <td :key="col.text">{{ row[col.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BlueTable',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      required: true,
      // 判断是否每一项都有ID
      validator(arr) {
        return !(arr.filter((item) => item.id === undefined).length > 0)
      },
    },
    indexIsVisable: {
      type: Boolean,
      default: true,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    tight: {
      type: Boolean,
      defaut: false,
    },
    striped: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onSlecteItem(row, index, e) {
      let selected = e.target.checked
      let selectedItemsCopy = JSON.parse(JSON.stringify(this.selectedItems))
      // console.log(this.selectedItems, this.selectedItemsCopy, selected, row)
      if (selected) {
        selectedItemsCopy.push(row)
      } else {
        selectedItemsCopy.splice(selectedItemsCopy.indexOf(row), 1)
      }
      this.$emit('update:selectedItems', selectedItemsCopy)
    },
    onSelectedAllItems(e) {
      let selected = e.target.checked
      if (selected) {
        this.$emit('update:selectedItems', this.dataSource)
      } else {
        this.$emit('update:selectedItems', [])
      }
    },
    inSelectedItems(row) {
      return this.selectedItems.filter((i) => i.id === row.id).length > 0
    },
  },
  watch: {
    selectedItems() {
      console.log(this.selectedItems)

      if (this.selectedItems.length > this.dataSource.length / 2 && this.selectedItems.length < this.dataSource.length) {
        this.$refs.selectAll.indeterminate = true
      } else {
        this.$refs.selectAll.indeterminate = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import './styles/var.scss';
$grey: darken($grey, 10%);
.b-table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border-bottom: 1px solid $grey;
  &.bordered td,
  &.bordered th {
    border: 1px solid $grey;
  }
  & td,
  th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px 8px;
  }
  &.tight td,
  &.tight th {
    padding: 4px 4px;
  }
  &.striped tbody {
    > tr {
      &:nth-child(even) {
        background: lighten($grey, 10%);
      }
    }
  }
}
</style>
