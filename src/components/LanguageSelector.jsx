import React from 'react';
import { Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'; // Import necessary components from Chakra UI
import { LANGUAGE_VERSIONS } from '../constants'; // Assuming LANGUAGE_VERSIONS is correctly imported

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = () => {
  return (
    <Box>
      <Text mb={2} fontSize='lg'>Language:</Text>
      <Menu>
        <MenuButton as={Button} variant="outline">
          javascript {/* This is the default button text */}
        </MenuButton>
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem key={language}>
              {language}
              <Text as="span" color="gray.600" fontSize="sm" ml={2}>
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LanguageSelector;
