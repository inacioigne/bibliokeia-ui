"use client";
// MUI Components
import {
  Container,
  Box,
  Divider,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

// MUI Icons
import { PersonAdd, Home } from "@mui/icons-material/";

// react-hook-form
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
import CardCataloguing from "src/components/cards/cardCataloguing";

// BiblioKeia Services
import { loc } from "src/services/loc";

const previousPaths = [
  {
    link: "admin",
    label: "Início",
    icon: <Home fontSize="small" />,
  },
  {
    link: "authority",
    label: "Autoridades",
    icon: <PersonAdd fontSize="small" />,
  },
];

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export default function Authority() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
        <BreadcrumbsBK previousPaths={previousPaths} currentPath="Importação" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Importar Autoridades - Library of Congress
      </Typography>
      <Divider />
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <InputLabel>Tipo de autoridade</InputLabel>
            <Select {...register("option")} defaultValue="option1" control={control}>
              <MenuItem value="option1">Opção 1</MenuItem>
              <MenuItem value="option2">Opção 2</MenuItem>
              <MenuItem value="option3">Opção 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
        {...register('textInput')}
        label="Busca"
        variant="outlined"
        margin="normal"
        fullWidth
      />
          <Button type="submit">Enviar</Button>
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
          {...field}
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem key={1} //value={10}
          >Ten</MenuItem>
          <MenuItem key={2} //value={20}
          >Twenty</MenuItem>
          <MenuItem key={3} //value={30}
          >Thirty</MenuItem>
        </Select>
        )}
      />
       <input type="submit" />

      </form> */}

        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </Box>
    </Container>
  );
}
