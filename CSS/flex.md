## Flexbox
### 1. 什么是Flex布局
1. flex布局是Flex BOX的缩写，是弹性布局。将任何一个容器定义为dispaly: flex;
2. 行内元素也可以定义为flex，dispaly: inline-flex;

### 2. 主要概念
1. 我们首先要知道主轴，交叉轴。我们通常将水平方向的上叫做主轴，垂直方向上的叫做交叉轴。
- 容器属性
  - flex-direction
    - 定义主轴方向
    - row , row-resverse , colum , colum-reverse
  - flex-wrap
    - 如果第一条轴线排列不下
    - nowrap
    - wrap
    - wrap-reverse
  - flex-flow
    - 是flex-direction和flex-wrap
  - justify-content
    - 定义项目在主轴上的对齐方式
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
  - align-items
    - 定义项目在交叉轴上对齐方式
    - flex-start
    - flex-end
    - center
    - stretch
    - baseline
  - algn-content
    - 定义多根轴线的对齐方式。如果项目只有一根轴线，则该属性失效。
    - flex-start
    - flex-end
    - center
    - stretch
    - space-betweem
    - space-around
- 项目属性
  - order
    - 定义项目的排列顺序，数值越少，排名越靠前，默认为0，负数有效
  - flex-grow
    - 定义了项目的放大比例，默认值为0，存在剩余空间则不放大。
  - flex-shrink
    - 缩小比例，默认值为1，空间不足，项目则缩小。
    - 因为默认值为1，所以0的时候，就缩小。
  - flex-basis
    - 显示项目在分配多余空间之前，项目占据的主轴空间。通常我们可以来计算主轴是否有多余空间。
  - flex
    - felx-grow , flex-shrink , flex-basis , 默认值为 0 1 auto
    - 常用默认值 auto: 1 1 auto,none: 0 0 auto, 1: 1 1 auto
  - align-self
    - 属性允许单个项目可以与其他项目不一样的对齐方式，可以覆盖align-items属性，默认值为auto。
