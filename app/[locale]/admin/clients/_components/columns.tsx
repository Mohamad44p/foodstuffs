/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteClient } from "@/app/[locale]/actions/clientActions";

export type Client = {
  id: string;
  title: string;
  Link: string;
  ButtonColor: string;
  BackgroundColor: string;
  ImageUrl: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ column, row }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {row.getValue("title")}
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "Link",
    header: "Link",
  },
  {
    accessorKey: "ButtonColor",
    header: "Button Color",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div
          className="w-6 h-6 rounded mr-2"
          style={{ backgroundColor: row.getValue("ButtonColor") }}
        />
        <span>{row.getValue("ButtonColor")}</span>
      </div>
    ),
  },
  {
    accessorKey: "BackgroundColor",
    header: "Background Color",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div
          className="w-6 h-6 rounded mr-2"
          style={{ backgroundColor: row.getValue("BackgroundColor") }}
        />
        <span>{row.getValue("BackgroundColor")}</span>
      </div>
    ),
  },
  {
    accessorKey: "ImageUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.getValue("ImageUrl")}
        alt={row.getValue("title")}
        className="w-16 h-16 object-cover rounded"
      />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;
      const router = useRouter();

      const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this client?")) {
          const result = await deleteClient(client.id);
          if (result.success) {
            router.refresh();
          } else {
            alert("Failed to delete client");
          }
        }
      };

      const handleEdit = () => {
        router.push(`/admin/clients/edit/${client.id}`);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
