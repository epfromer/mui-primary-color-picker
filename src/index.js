import * as colors from '@material-ui/core/colors'
import Radio from '@material-ui/core/Radio'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import PropTypes from 'prop-types'
import React from 'react'

const defaultColor = '#2196f3'
const hues = Object.keys(colors).slice(1, 17) // missing: "brown", "grey", "blueGrey"
const shades = [
  900,
  800,
  700,
  'A700',
  600,
  500,
  400,
  'A400',
  300,
  200,
  'A200',
  100,
  'A100',
  50,
]

const styles = (theme) => ({
  radio: {
    padding: 0,
  },
  radioIcon: {
    width: 48,
    height: 48,
  },
  radioIconSelectedWhite: {
    width: 48,
    height: 48,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioIconSelectedBlack: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swatch: {
    width: 192,
  },
  sliderContainer: {
    width: 192,
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  slider: {
    width: 'calc(100% - 40px)',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
})

// map of color to hue, shade
let colorToHueShadeMap = null
const buildColorToHueShadeMap = () => {
  if (!colorToHueShadeMap) {
    colorToHueShadeMap = {}
    for (let hue of hues) {
      let shadeIndex = 0
      for (let shade of shades) {
        const color = colors[hue][shade]
        colorToHueShadeMap[color] = { hue, shadeIndex }
        shadeIndex++
      }
    }
  }
}
function hueFromColor(color) {
  buildColorToHueShadeMap()
  const hueShade = colorToHueShadeMap[color]
  return hueShade ? hueShade.hue : 'blue'
}
function shadeFromColor(color) {
  buildColorToHueShadeMap()
  const hueShade = colorToHueShadeMap[color]
  return hueShade ? hueShade.shadeIndex : 5
}

function PrimaryColorPicker(props) {
  const { classes } = props
  const [selectedHue, setSelectedHue] = React.useState(
    hueFromColor(props.defaultColor ? props.defaultColor : defaultColor)
  )
  const [selectedShadeIndex, setSelectedShadeIndex] = React.useState(
    shadeFromColor(props.defaultColor ? props.defaultColor : defaultColor)
  )

  return (
    <React.Fragment>
      <div className={classes.sliderContainer}>
        <Typography id={'ShadeSliderLabel'}>Shade:</Typography>
        <Slider
          className={classes.slider}
          value={selectedShadeIndex}
          min={0}
          max={13}
          step={1}
          onChange={(e, shadeIndex) => {
            props.onChange(colors[selectedHue][shades[shadeIndex]])
            setSelectedShadeIndex(shadeIndex)
          }}
          aria-labelledby={'ShadeSliderLabel'}
        />
      </div>
      <div className={classes.swatch}>
        {hues.map((hue) => {
          const backgroundColor = colors[hue][shades[selectedShadeIndex]]
          return (
            <Tooltip placement="right" title={hue} key={hue}>
              <Radio
                className={classes.radio}
                color="default"
                checked={
                  colors[selectedHue][shades[selectedShadeIndex]] ===
                  backgroundColor
                }
                data-testid={hue}
                onChange={(e) => {
                  props.onChange(
                    colors[e.target.value][shades[selectedShadeIndex]]
                  )
                  setSelectedHue(e.target.value)
                }}
                value={hue}
                aria-labelledby={`tooltip-${hue}`}
                icon={
                  <div
                    className={classes.radioIcon}
                    style={{ backgroundColor }}
                  />
                }
                checkedIcon={
                  <div
                    className={
                      (selectedShadeIndex >= 6 && selectedShadeIndex <= 9) ||
                      selectedShadeIndex === 13
                        ? classes.radioIconSelectedBlack
                        : classes.radioIconSelectedWhite
                    }
                    style={{ backgroundColor }}
                  >
                    <CheckIcon style={{ fontSize: 30 }} />
                  </div>
                }
              />
            </Tooltip>
          )
        })}
      </div>
    </React.Fragment>
  )
}

PrimaryColorPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(PrimaryColorPicker)
