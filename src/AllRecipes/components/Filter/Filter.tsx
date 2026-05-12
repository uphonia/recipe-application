import React, { useState } from "react";

import { categoryList, sortList } from "./filter.consts";
import {
  Wrapper,
  SearchBar,
  SearchInput,
  Section,
  CheckboxList,
} from "./filter.styles";
import { Typography } from "../../../common/components/Typography/Typography";
import { Button } from "../../../common/components/Button/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const Filter = () => {
  const [sortBy, setSortBy] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  return (
    <Wrapper>
      <SearchBar>
        <SearchInput />
        <Button>Search</Button>
      </SearchBar>
      <Section>
        <FormControl>
          <InputLabel id="sort-by">Sort By</InputLabel>
          <Select
            id="sort-by"
            value={sortBy}
            label="Sort By"
            onChange={handleChange}
            size="small"
          >
            {sortList.map((sort) => (
              <MenuItem>{sort}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Section>
      <Section>
        <Typography variant="body2">Categories</Typography>
        <CheckboxList>
          {categoryList.map((category) => (
            <FormControlLabel
              control={<Checkbox defaultChecked={false} size="small" />}
              label={category}
            />
          ))}
        </CheckboxList>
      </Section>
    </Wrapper>
  );
};
