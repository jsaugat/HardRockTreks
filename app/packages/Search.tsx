"use client"

import React, { useState } from 'react'

interface QueryProps {
  query: string
  setQuery: (query: string) => void;
}

export const Search = ({ query, setQuery }: QueryProps) => {
  console.log({ query })
  return (
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
  )
}
