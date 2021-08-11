import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import useStyles from './styles'
import ProductCard from '../../components/ProductCard'
import Switch from '../../components/UI/Switch'
import { ExpandMore, ExpandLess } from '@material-ui/icons'
import SlideShow from '../../components/SlideShow'
import Loading from '../../components/UI/Loading'

const queryString = require('query-string')

const ProductList = props => {

  const { searchText } = props

  const [data, setData] = useState(null)
  const [dataFiltered, setDataFiltered] = useState(null)
  const [withStockOnly, setWithStockOnly] = useState(false)
  const [dropDownActive, setDropDownActive] = useState(false)
  const [priceAsc, setPriceAsc] = useState(true)

  const classes = useStyles();

  useEffect(() => {
    const loadData = async() => {
      setData(null)
      await fetch(`http://localhost:5000/search?${queryString.stringify({"value":searchText})}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then( async response => {
        const result = await response.json()
        result.data.sort((a,b) => a.price - b.price)
        setData(result)
        setDataFiltered(result.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    loadData()
  },[searchText])

  const handleWithStockOnly = () => {
    let withStock = withStockOnly
    setWithStockOnly(!withStock)
    if(withStock) {
      setDataFiltered(data.data)
      return
    }
    setDataFiltered(data.data.filter(x => x.stockAvailable == true))
  }

  const handleDropDown = () => {
    setDropDownActive(!dropDownActive)
  }

  const handleDropDownSelection = (selection) => {
    setDropDownActive(false)
    setPriceAsc(selection)
    if(selection)
      setDataFiltered(dataFiltered.sort((a,b) => a.price - b.price))
    else
      setDataFiltered(dataFiltered.sort((a,b) => b.price - a.price))
  }

  if(!data || !dataFiltered)
    return (
      <Loading isLoading={!data}/>
     /*  <div className={clsx(classes.root, classes.loadingRoot)}>
        <div style={{position: 'absolute', top: 0}}>
          <SlideShow/>
        </div> 
        <BounceLoader 
          color={"#36D7C6"} 
          loading={!data} 
          size={150}/>
      </div> */
    )

  return (
    <div className={classes.root}>
      <div style={{marginTop: 0}}>
        <SlideShow/>
      </div> 
      <div className={classes.searchMain}>
        <aside className={classes.searchBar}>
          <div>
            <h1 className={classes.searchTitle}>{searchText}</h1>
          </div>
          <div className={classes.searchResultContainer}>
            <span className={classes.searchResult}>{`${dataFiltered.length} resultados`}</span>
          </div>
          <section className={classes.searchFilter}>
            <dl className={classes.stockFilterDl}>
              <div style={{marginTop: -3}}>
                <dd className={classes.stockFilterDd}>
                  <div style={{lineHeight: '15px'}}>
                    <span className={classes.stockFilterSpan}>Solo en Stock</span>
                  </div>
                  <div className={classes.stockFilterSwitchContainer}>
                    <Switch checked={withStockOnly} onChange={handleWithStockOnly}/>
                  </div>
                </dd>
              </div>
            </dl>
          </section>
        </aside>
        <section className={classes.searchResults}>
          <div style={{marginTop:8, marginBottom: 24, textAlign: 'right'}}>
            <div style={{display: 'inline-block', position: 'relative', width: 'max-content', marginRight: 20}}>
              <div style={{display: 'inline-flex', alignItems:'center'}}>
                <div style={{display: 'flex', marginBottom: -1}}>
                  <div className={classes.searchViewOptionsTitle}>
                    Ordenar por
                  </div>
                  <div style={{marginTop: 3}}>
                    <div style={{width: 'auto', height: 16}}>
                      <div className={classes.dropDown}>
                        <button className={classes.dropDownTrigger} onClick={handleDropDown}>
                          {priceAsc ? "Menor precio" : "Mayor precio"}
                          { !dropDownActive 
                            ? <ExpandMore className={classes.dropDownArrow}/>
                            : <ExpandLess className={classes.dropDownArrow}/> }
                        </button>
                        <div className={clsx(classes.dropDownPopOver, dropDownActive ? classes.dropDownPopOver_Open : null)}>
                          <ul className={classes.dropDownList}>
                            <li role="presentation" value="price_asc" type="standalone" index={0} className={classes.dropDown_li}>
                              <a onClick={() => handleDropDownSelection(true)} className={classes.dropDown_a}>
                                <div className={clsx(classes.dropDownItem, priceAsc ? classes.dropDownItemSelected : null)} >
                                  <div className={classes.dropDownItemText}>
                                    Menor precio
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li role="presentation" value="price_dsc" type="standalone" index={1} className={classes.dropDown_li}>
                              <a onClick={() => handleDropDownSelection(false)} className={classes.dropDown_a}>
                                <div className={clsx(classes.dropDownItem, !priceAsc ? classes.dropDownItemSelected : null)} >
                                  <div className={classes.dropDownItemText}>
                                    Mayor precio
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.listContainer}>
            {dataFiltered?.map( (e, i) => (
              <a href={e.productUrl} key={i}>
                <ProductCard
                  index={i}
                  img={e.img}
                  name={e.name}
                  price={e.price}
                  stock={e.stockAvailable}
                />
              </a>  
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductList