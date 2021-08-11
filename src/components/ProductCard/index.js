import React from 'react'
import useStyles from './styles'
import clsx from 'clsx'

const ProductCard = ({index, img, name, price, stock}) => {

  const classes = useStyles()

  return (
    <div className={clsx(classes.cardRoot, index === 0 || index % 3 === 0 ? null : classes.cardRootMarginLeft)}>
      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '100%', position: 'relative', width: '100'}}>
        <div className={classes.mediaContainer}>
          <img
            className={classes.img}
            src={img}
          />
        </div>
        <div className={classes.details}>
          <div className={classes.priceContainer}>
            <span className={classes.price}>
              {`$ ${price}`}
            </span>
          </div>
          <div style={{display:'flex'}}>
            <div className={clsx(classes.stockContainer, stock ? classes.stockDisponibleContainer : classes.sinStockContainer)}>
              <span className={classes.stock}>
                {stock ? "Stock disponible" : "Sin stock"}
              </span>
            </div>
          </div>
          <div className={classes.nameContainer}>
            <span className={classes.name}>
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard