import { Note } from '@/types/note';

export type NotesResponse = {
  notes: Note[];
  totalPages: number;
};

export async function fetchNotes(
  page: number,
  search: string
): Promise<NotesResponse> {
  console.log(page, search);

  return {
    notes: [],
    totalPages: 1,
  };
}