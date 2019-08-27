workflow "New workflow" {
  on = "push"
  resolves = ["SamKirkland/FTP-Deploy-Action"]
}

action "SamKirkland/FTP-Deploy-Action" {
  uses = "SamKirkland/FTP-Deploy-Action"
  secrets = ["FTP_PASSWORD", "FTP_SERVER", "FTP_USERNAME", "REMOTE_DIR"]
}
