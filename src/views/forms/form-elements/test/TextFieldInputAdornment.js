// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const TextFieldInputAdornment = () => {
  // ** State
  const [values, setValues] = useState({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Card>
      <CardHeader title='Input Adornment' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form className='demo-space-x' noValidate autoComplete='off'>
          <TextField
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
          />
          <FormControl>
            <OutlinedInput
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label='Password'
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    aria-label='toggle password visibility'
                  >
                    {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>

        <form className='demo-space-x' noValidate autoComplete='off'>
          <TextField
            variant='filled'
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
          />
          <FormControl variant='filled'>
            <FilledInput
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          <FormControl variant='filled'>
            <InputLabel>Password</InputLabel>
            <FilledInput
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    aria-label='toggle password visibility'
                  >
                    {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>

        <form className='demo-space-x' noValidate autoComplete='off'>
          <TextField
            variant='standard'
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
          />
          <FormControl variant='standard' sx={{ mt: 3 }}>
            <Input
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          <FormControl variant='standard'>
            <InputLabel>Password</InputLabel>
            <Input
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    aria-label='toggle password visibility'
                  >
                    {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  )
}

export default TextFieldInputAdornment
