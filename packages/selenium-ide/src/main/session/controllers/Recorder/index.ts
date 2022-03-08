import { Session } from 'main/types'

export interface RecordNewCommandInput {
  command: string
  target: string | string[][]
  value: string | string[][]
  insertBeforeLastCommand?: boolean
  frameLocation?: string
}
export default class RecorderController {
  constructor(session: Session) {
    this.session = session
  }
  currentStepIndex: null | number = null
  currentTest: null | string = null
  isRecording = false
  session: Session
  async recordNewCommand(cmd: RecordNewCommandInput): Promise<boolean> {
    console.log('Recording new command', cmd)
    return true
  }
  async requestAttach(): Promise<boolean> {
    console.log('Request attach thingy?')
    return true
  }
  async setActiveContext(sessionID: string, frameLocation: string) {
    console.log('Setting active context', sessionID, frameLocation)
  }
  async setFrameLocation(frameLocation: string) {
    console.log('Setting frame location', frameLocation)
  }
  async setWindowHandle(sessionID: string, handle: string) {
    console.log('Setting window handle', sessionID, handle)
  }
  async start(testID: string, startIndex = 0) {
    this.currentTest = testID
    this.currentStepIndex = startIndex
    this.isRecording = true
  }
  async stop() {
    this.isRecording = false
    this.currentTest = null
    this.currentStepIndex = 0
  }
}