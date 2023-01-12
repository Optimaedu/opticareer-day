import NiceModal from "@ebay/nice-modal-react";
import AdminTopbar from "../../core/ui/client/blocks/AdminTopbar";
import Button from "../../core/ui/client/components/Button";
import Spinner from "../../core/ui/client/components/Spinner";
import AddQuestionDialog from "../../modules/quiz/client/dialogs/AddQuestionDialog";
import useFetchAllQuestions from "../../modules/quiz/client/queries/useFetchAllQuestionsQuery";

const AdminQuestionsPage = () => {

  const { data: questionsResponse, isLoading } = useFetchAllQuestions();
  const questions = questionsResponse?.data.questions;

  const addQuestion = () => {
    NiceModal.show(AddQuestionDialog);
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header>
        <AdminTopbar />
      </header>
      
      <main className="px-4 py-8">
        <div className="w-full max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-light text-4xl">Quiz frågor</h1>
            <Button onClick={addQuestion}>Skapa ny fråga</Button>
          </div>
          <div className="bg-white rounded shadow p-4">
            
            { isLoading ? <Spinner /> : (
              <ul>
                { questions?.map(question => (
                  <li key={question.id} className="border-b border-b-gray-200 last:border-b-0">
                    <button
                      className="px-4 py-3 w-full text-left hover:bg-gray-100"
                    >{ question.content.sv }</button>
                  </li>
                )) }
              </ul>
            ) }

          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminQuestionsPage;
