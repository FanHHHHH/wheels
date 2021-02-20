<template>
  <div class="b-table-wrapper" ref="wrapper">
    <div ref="tableWrapper" style="overflow: auto; position: relative; white-space: no-wrap">
      <table class="b-table" :class="{ bordered, tight }" ref="bTable">
        <thead>
          <tr>
            <th v-if="expandField" style="width: 50px" class="b-table-center"></th>
            <th style="width: 50px" class="b-table-center" v-if="checkable">
              <input ref="selectAll" @change="onSelectedAllItems" type="checkbox" :checked="areAllItemsSelected" />
            </th>
            <th style="width: 50px" class="b-table-center" v-if="indexIsVisable">#</th>
            <th :style="{ width: col.width + 'px' }" v-for="col in columns" :key="col.field">
              <div class="b-table-header">
                {{ col.text }}
                <span class="b-table-sorter" v-if="col.field in orderBy" @click="changeOrderBy(col.field)">
                  <b-icon name="asc" :class="{ active: orderBy[col.field] === 'asc' }"></b-icon>
                  <b-icon name="desc" :class="{ active: orderBy[col.field] === 'desc' }"></b-icon>
                </span>
              </div>
            </th>
            <th ref="actionHeader">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(row, index) in dataSource">
            <tr :key="row.id" :class="{ striped: striped && index % 2 === 1 }">
              <td v-if="expandField" style="width: 50px" class="b-table-center">
                <span @click="expandItem(row.id)" class="b-table-expand-wrapper" :class="{ 'expand-active': inExpanedIds(row.id) }">
                  <b-icon class="b-table-expand" name="right"></b-icon>
                </span>
              </td>
              <!-- checked 根据selectedItems设置选中状态 -->
              <td style="width: 50px" class="b-table-center" v-if="checkable"><input type="checkbox" @change="onSlecteItem(row, index, $event)" :checked="inSelectedItems(row)" /></td>
              <td style="width: 50px" class="b-table-center" v-if="indexIsVisable">{{ index }}</td>
              <template v-for="col in columns">
                <td :style="{ width: col.width + 'px' }" :key="col.field">
                  <template v-if="col.render">
                    <vnodes :vnodes="col.render({ value: row[col.field] })" />
                  </template>
                  <template v-else>
                    {{ row[col.field] }}
                  </template>
                </td>
              </template>
              <td>
                <div ref="action" style="display:inline-block">
                  <slot :item="row"></slot>
                </div>
              </td>
            </tr>
            <tr v-if="inExpanedIds(row.id)" :key="`${row.id}-expand`" :class="{ striped: striped && index % 2 === 1 }">
              <td :colspan="colSpan">{{ row[expandField] || '空' }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="b-table-loading" v-if="loading">
      <b-icon name="loading"></b-icon>
    </div>
  </div>
</template>

<script>
import BIcon from './Icon.vue'
export default {
  name: 'BlueTable',
  components: {
    BIcon,
    vnodes: {
      functional: true,
      render: (h, context) => context.props.vnodes,
    },
  },
  props: {
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
      default: false,
    },
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
    },
    expandField: {
      type: String,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      up: true,
      expandedIds: [],
      columns: [],
    }
  },
  mounted() {
    this.$slots.default.map((node) => {
      const { text, field, width } = node.componentOptions.propsData
      const render = node.data.scopedSlots && node.data.scopedSlots.default
      this.columns.push({ text, field, width, render })
    })
    const table = this.$refs.bTable
    const table2 = table.cloneNode(false)
    this.table2 = table2
    table2.classList.add('b-table-copy')
    const { height } = table.children[0].getBoundingClientRect()
    table2.appendChild(table.children[0])
    this.$refs.tableWrapper.style.marginTop = height + 'px'
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    this.$refs.wrapper.appendChild(table2)
    if (this.$scopedSlots.default) {
      const scrollbarWidth = this.$refs.tableWrapper.offsetWidth - this.$refs.tableWrapper.clientWidth
      const div = this.$refs.action[0]
      const { width } = div.getBoundingClientRect()
      const parent = div.parentNode
      const styles = window.getComputedStyle(parent)
      const leftPadding = styles.getPropertyValue('padding-left')
      const rightPadding = styles.getPropertyValue('padding-right')
      const leftBorder = styles.getPropertyValue('border-left-width')
      const rightBorder = styles.getPropertyValue('border-right-width')
      const width2 = parseInt(leftPadding) + parseInt(rightPadding) + parseInt(leftBorder) + parseInt(rightBorder) + 4 + width // +2 是为了减少parseInt精度损失
      this.$refs.actionHeader.style.width = width2 + scrollbarWidth + 'px'
      this.$refs.action.map((div) => {
        div.parentNode.style.width = width2 + 'px'
      })
    }
  },
  beforeDestroy() {
    this.table2.remove()
  },
  methods: {
    expandItem(id) {
      if (this.inExpanedIds(id)) {
        this.expandedIds.splice(this.expandedIds.indexOf(id), 1)
      } else {
        this.expandedIds.push(id)
      }
    },
    inExpanedIds(id) {
      if (this.expandedIds.indexOf(id) >= 0) {
        return true
      }

      return false
    },
    onSlecteItem(row, index, e) {
      let selected = e.target.checked
      let selectedItemsCopy = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        selectedItemsCopy.push(row)
      } else {
        selectedItemsCopy = selectedItemsCopy.filter((i) => i.id !== row.id)
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
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      const oldVal = copy[key]
      if (oldVal === 'asc') {
        copy[key] = 'desc'
      } else if (oldVal === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length >= 1 && this.selectedItems.length < this.dataSource.length) {
        this.$refs.selectAll.indeterminate = true
      } else {
        this.$refs.selectAll.indeterminate = false
      }
    },
  },
  computed: {
    areAllItemsSelected() {
      const ds = this.dataSource.map((item) => item.id).sort()
      const sitems = this.selectedItems.map((item) => item.id).sort()
      if (ds.length !== sitems.length) {
        return false
      }
      let equal = true
      let n = ds.length - 1
      while (n > 0) {
        if (ds[n] !== sitems[n]) {
          equal = false
          break
        }
        n--
      }
      return equal
    },
    colSpan() {
      if (this.indexIsVisable && this.expandField) {
        return this.columns.length + 4
      }
      if (this.indexIsVisable) {
        return this.columns.length + 3
      }
      return this.columns.length + 2
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
  & tr {
    background: none;
  }
  & td,
  th {
    border: none;
  }
  & &-center {
    text-align: center;
  }
  &-expand {
    width: 0.8em;
    height: 0.8em;
  }
  &-expand-wrapper {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: transform 0.4s;
    &.expand-active {
      transform: rotate(90deg);
    }
  }
  &-wrapper {
    position: relative;
    &::before {
      content: '';
      display: table;
    }
  }
  &-copy {
    margin-top: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: none;
    background: white;
  }
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
  & .striped {
    background: lighten($grey, 10%);
  }

  &-sorter {
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    svg {
      width: 9px;
      height: 9px;
      margin: 0 8px;
      fill: $grey;
      &.active {
        fill: $blue;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }

  &-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    svg {
      @include spin;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
