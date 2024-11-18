"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { BotIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from "react-markdown";
import Link from "next/link";
import { ConnectAi } from "./conect-ai";

interface AIReportButtonProps {
  hasPremiumPlan: boolean;
  month: string;
}

const AiReportButton = ({ month, hasPremiumPlan }: AIReportButtonProps) => {
  const [report, setReport] = useState<string | null>();
  const [reportIsLoading, setReportIsLoading] = useState(false);
  const handleGenerateReportClick = async () => {
    try {
      setReportIsLoading(true);
      const aiReport = await ConnectAi({ month });
      setReport(aiReport);
    } catch (error) {
      console.log(error);
    } finally {
      setReportIsLoading(false);
    }
  };
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setReport(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          Relatorio AI
          <BotIcon />
        </Button>
      </DialogTrigger>

      {hasPremiumPlan ? (
        <>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Relatorio AI</DialogTitle>
              <DialogDescription>
                Use a Inteligência artificial para gerar um relatório com
                insights sobre suas finanças
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="prose prose-headings:text-white prose-strong:text-white max-h-[450px] text-white">
              <Markdown>{report}</Markdown>
            </ScrollArea>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"ghost"}>Cancelar</Button>
              </DialogClose>
              <Button
                onClick={handleGenerateReportClick}
                disabled={reportIsLoading}
              >
                {reportIsLoading && <Loader2Icon className="animate-spin" />}
                Gerar Relatório
              </Button>
            </DialogFooter>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Relatorio AI</DialogTitle>
              <DialogDescription>
                Você precisa de um plano premium para gerar relatório com AI
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"ghost"}>Cancelar</Button>
              </DialogClose>
              <Button disabled={reportIsLoading} asChild>
                <Link href={"/subscription"}>Assinar plano premium </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default AiReportButton;
