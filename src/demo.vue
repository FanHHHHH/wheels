<template>
  <div id="app">
    <b-scroll>
      <div>
        <div>1sssssssssssssssssssssssssssssssssssssssssssssssssssssssss</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49</div>
        <div>50</div>
        <div>51</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
      </div>
    </b-scroll>
    <!-- <b-table :height="200" expandField="description" bordered striped checkable indexIsVisable :loading="loading" @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
      <b-table-column text="姓名" field="name" :width="300">
        <template slot-scope="scope">
          <a href="#">{{ scope.value }}</a>
        </template>
      </b-table-column>
      <b-table-column text="分数" field="score" :width="80">
        <template slot-scope="scope">
          {{ scope.value }}
        </template>
      </b-table-column>
      <template v-slot="row">
        <button @click="edit(row.item)">编辑</button>
        <button @click="view(row.item)">查看</button>
      </template>
    </b-table> -->
  </div>
</template>

<style scoped></style>

<script>
import BTable from './table.vue'
import BTableColumn from './table-column.vue'
import BScroll from './scroll.vue'
export default {
  name: 'demo',
  components: {
    BTable,
    BTableColumn,
    BScroll,
  },
  data() {
    return {
      currentPage: 1,
      // columns: [
      //   { text: '姓名', field: 'name', width: '300' },
      //   { text: '分数', field: 'score', width: '80' },
      // ],
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  mounted() {
    // let y = 0
    // const { height: childrenHeight } = this.$refs.children.getBoundingClientRect()
    // const { paddingBottom, paddingTop } = window.getComputedStyle(this.$refs.children)
    // const { borderBottomWidth, borderTopWidth } = window.getComputedStyle(this.$refs.parent)
    // const { height: parentHeight } = this.$refs.parent.getBoundingClientRect()
    // console.log(borderBottomWidth, borderTopWidth, paddingBottom, paddingTop)
    // const height = childrenHeight - parentHeight + parseInt(borderBottomWidth) + parseInt(borderTopWidth) + parseInt(paddingBottom) + parseInt(paddingTop)
    // this.$refs.children.style.transition = 'transform 0.15s ease'
    // this.$refs.parent.addEventListener('wheel', (e) => {
    //   y -= e.deltaY
    //   if (y > 0) {
    //     y = 0
    //   }
    //   if (y < -height) {
    //     y = -height
    //   }
    //   console.log(y)
    //   this.$refs.children.style.transform = `translateY(${y}px)`
    // })
  },
  methods: {
    x() {
      this.loading = true
      setTimeout(() => {
        this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 2000)
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
