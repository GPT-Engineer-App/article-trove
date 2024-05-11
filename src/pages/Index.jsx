import React, { useState } from "react";
import { Container, Box, Heading, Text, Tag, Wrap, WrapItem, VStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch, FaTag } from "react-icons/fa";

// Simulated data for articles
const articles = [
  {
    id: 1,
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces...",
    tags: ["React", "JavaScript", "UI"],
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    content: "Let's dive into some advanced patterns in React...",
    tags: ["React", "Advanced"],
  },
  {
    id: 3,
    title: "Getting Started with Chakra-UI",
    content: "Chakra-UI is a simple, modular and accessible component library...",
    tags: ["Chakra-UI", "React", "UI"],
  },
];

const Index = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredArticles = articles.filter((article) => article.tags.some((tag) => tag.toLowerCase().includes(filter)));

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input placeholder="Filter by tag..." onChange={handleFilterChange} />
        </InputGroup>
        {filteredArticles.map((article) => (
          <Box key={article.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{article.title}</Heading>
            <Text mt={4}>{article.content}</Text>
            <Wrap mt={4}>
              {article.tags.map((tag) => (
                <WrapItem key={tag}>
                  <Tag size="md" variant="solid" colorScheme="teal" cursor="pointer">
                    <FaTag />
                    <Text ml={2}>{tag}</Text>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
