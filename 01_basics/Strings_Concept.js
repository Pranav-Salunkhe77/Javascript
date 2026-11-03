//Practicall OF UNDO REDO OPERATION

class TextEditor:
    def __init__(self):
         self.document=[]
         self.undo_stack=[]
         self.redo_stack=[]

    def make_change(self,change):
        self.undo_stack.append(self.document.copy())
        self.document.append(change)
        self.redo_stack.clear()
        print(f"\nChange Made:'{change}'")

    def undo(self):
        if not self.undo_stack:
            print("\nNothing to Undo!")
            return
        self.redo_stack.append(self.document.copy())
        self.document=self.undo_stack.pop()
        print("\nUndo perfoemed.")

    def redo(self):
        if not self.redo_stack:
            print("\nNothing to Redo!")
            return
        self.undo_stack.append(self.document.copy())
        self.document=self.redo_stack.pop()
        print("\nRedo performed.")

    def display_state(self):
        print("\n---Current Document---")
        if not self.document:
            print("[Empty Document]")
        else:
            for i in range(len(self.document)):
                print(f"{i+1}:{self.document[i]}")
            print("-----------")
editor= TextEditor()
while True:
    print("\n---Menu---")
    print("1.Add Line/Text")
    print("2.Undo")
    print("3.Redo")
    print("4.Show Document")
    print("5.Exit")
    choice=input("Enter your chioce:")
    if choice=='1':
        text=input("Enter line/text to add:")
        editor.make_change(text)
    elif choice=='2':
        editor.undo()
    elif choice=='3':
        editor.redo()
    elif choice=='4':
        editor.display_state()
    elif choice=='5':
        print("Exiting...")
        break
    else:
        print("Invalid choice! Try again.")
