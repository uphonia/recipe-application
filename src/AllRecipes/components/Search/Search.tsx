import React, { useState } from "react";

import { Wrapper, InputWrapper, SearchInput } from "./search.styles";
import { FormButton } from "../../../common/components/Button/button.styles";

export const Search = () => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchInput placeholder="Ex: Name, #" type="text" />
        <FormButton>Search</FormButton>
        <FormButton onClick={() => setShowFilters(!showFilters)}>
          {`${showFilters ? "Hide" : "Show"} Filters`}
        </FormButton>
      </InputWrapper>
    </Wrapper>
  );
};
