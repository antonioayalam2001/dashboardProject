import {Box, Button, TextField, useMediaQuery} from "@mui/material";
import {Header} from "../../components/Header.jsx";

import {Formik} from "formik";
import * as yup from 'yup';

export const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        // Saving locally the user info
        localStorage.setItem("userInfo",JSON.stringify(values));
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    }

    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    const userSchema = yup.object().shape({
        firstName: yup.string().required("The field firstName must not be empty"),
        lastName: yup.string().required("The field lastName must not be empty"),
        email: yup.string().email().required("The field email must not be empty"),
        contact: yup.string().matches(phoneRegExp, 'Phone number is not valid :(').required("The field contact must not be empty"),
        address1: yup.string().required("The field address1 must not be empty"),
        address2: yup.string().required("The field address2 must not be empty"),
    });

    return (
        <Box p={'1rem'} m={'20px'} sx={{
            // Background con media query
            // backgroundColor: {
            //     xs: 'pink',
            //     sm: 'red',
            //     md: 'blue',
            //     lg: 'white',
            // }
        }}>
            <Header title={'Welcome aboard'} subtitle={'Please submit your info and start the experience '}/>

            {/*    Utilizando FORMIK*/}
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                    handleReset
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display={'grid'} gap={'30px'} gridTemplateColumns={'repeat(4,minmax(0,1fr))'}
                             sx={{
                                 "&>div": {gridColumn: isNonMobile ? undefined : 'span 4'}
                             }}
                        >
                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'First Name'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.firstName} name={'firstName'}
                                       error={!!touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'Last Name'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.lastName} name={'lastName'}
                                       error={!!touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'Email'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.email} name={'email'}
                                       error={!!touched.email && !!errors.email} helperText={touched.email && errors.email}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'Contact'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.contact} name={'contact'}
                                       error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'Address 1'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.address1} name={'address1'}
                                       error={!!touched.address1 && !!errors.address1} helperText={touched.address1 && errors.address1}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <TextField fullWidth variant={'filled'}
                                       type={'text'}
                                       label={'Address 2'}
                                       onBlur={handleBlur} onChange={handleChange} value={values.address2} name={'address2'}
                                       error={!!touched.address2 && !!errors.address2} helperText={touched.address2 && errors.address2}
                                       sx={{gridColumn: 'span 2'}}>
                            </TextField>

                            <Button sx={{gridColumn:'span 2'}} type={"submit"} variant={'contained'} color={'primary'}>Finish</Button>
                            <Button sx={{gridColumn:'span 2'}} variant={'contained'} color={'error'} onClick={handleReset}>Reset</Button>


                        </Box>
                    </form>
                )}

            </Formik>

        </Box>
    );
}