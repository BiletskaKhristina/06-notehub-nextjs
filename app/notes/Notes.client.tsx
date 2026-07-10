'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import NoteForm from '@/components/NoteForm/NoteForm';
import { useState } from 'react';

export default function NotesClient() {
  const [query, setQuery] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', query],
    queryFn: () => fetchNotes(1, query),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <>
      <SearchBox onSearch={setQuery} />
      <NoteForm onClose={() => {}} />
      <NoteList notes={data?.notes || []} />
    </>
  );
}
